import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const actorId = searchParams.get("actorId");
  const targetId = searchParams.get("targetId");
  const actionId = searchParams.get("actionId");
  const search = searchParams.get("search");
  const page = Number(searchParams.get("page") || "1");
  const limit = Number(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  const where = {
    actorId: actorId ? String(actorId) : undefined,
    targetId: targetId ? String(targetId) : undefined,
    actionId: actionId ? String(actionId) : undefined,
    OR: search
      ? [
          { actorName: { contains: String(search) } },
          { targetName: { contains: String(search) } },
          { actionName: { contains: String(search) } },
        ]
      : undefined,
  };

  const events = await prisma.event.findMany({
    where,
    skip,
    take: limit,
    orderBy: { occurredAt: "desc" },
  });

  const eventsWithParsedMetadata = events.map((event) => ({
    ...event,
    metadata: JSON.parse(event.metadata),
  }));

  const total = await prisma.event.count({ where });

  return NextResponse.json({ events: eventsWithParsedMetadata, total });
}

export async function POST(request: NextRequest) {
  const {
    object,
    actorId,
    actorName,
    group,
    actionId,
    actionName,
    targetId,
    targetName,
    location,
    occurredAt,
    metadata,
  } = await request.json();

  const event = await prisma.event.create({
    data: {
      object,
      actorId,
      actorName,
      group,
      actionId,
      actionName,
      targetId,
      targetName,
      location,
      occurredAt: new Date(occurredAt),
      metadata: JSON.stringify(metadata), // Convert metadata to JSON string
    },
  });

  return NextResponse.json(event, { status: 201 });
}

export interface Metadata {
  redirect: string;
  description: string;
  x_request_id: string;
}

export interface Event {
  id: string;
  object: string;
  actorId: string;
  actorName: string;
  group: string;
  actionId: string;
  actionName: string;
  targetId: string;
  targetName: string;
  location: string;
  occurredAt: Date;
  metadata: Metadata;
}

export interface Event extends Record<string, unknown> {
  Date: string;
  Name: string;
  Description: string;
  Image: string;
  ActivityType: string;
  Cost: string;
  EventType: string;
  Location: string;
}

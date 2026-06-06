const eventTypes = ["button_click"] as const;
export type EventTypes = (typeof eventTypes)[number];

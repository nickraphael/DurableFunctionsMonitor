
// A DTO used by DurableOrchestrationStatus.historyEvents
export class HistoryEvent {
    Timestamp: string;
    EventType: string;
    Name: string;
    ScheduledTime: string;
    Result: any;
    Details: any;
}

// Could instead just iterate through field names of HistoryEvent, but reflection in TypeScript still looks tricky
export const HistoryEventFields = [
    'Timestamp',
    'EventType',
    'Name',
    'ScheduledTime',
    'Result',
    'Details',
];

export type RuntimeStatus = "Running" | "Completed" | "ContinuedAsNew" | "Failed" | "Canceled" | "Terminated" | "Pending";

export type EntityType = "Orchestration" | "DurableEntity";

export class EntityId {
    name: string;
    key: string;
}

// A DTO returned by DurableOrchestrationClient.getStatusAll()
export class DurableOrchestrationStatus {
    instanceId: string;
    name: string;
    entityId: EntityId;
    runtimeStatus: RuntimeStatus;
    entityType: EntityType;
    lastEvent: string;
    input: any;
    customStatus: string;
    output: any;
    createdTime: string;
    lastUpdatedTime: string;
    historyEvents?: HistoryEvent[];
}

// Could instead just iterate through field names of DurableOrchestrationStatus, but reflection in TypeScript still looks tricky
export const DurableOrchestrationStatusFields = [
    'instanceId',
    'name',
    'createdTime',
    'lastUpdatedTime',
    'runtimeStatus',
    'lastEvent',
    'input',
    'output',
    'customStatus'
];
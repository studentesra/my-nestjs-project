import { AuditModel } from "./audit.model";
import { ActivityModel } from "./activity.model";
import { inventoryModel } from "./inventory.model";
import { TicketTypeModel } from "./ticket-type.model";
import { UserModel } from "./user.model";

export class TicketModel {
     
    id: string;
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel [];
    inventories: inventoryModel[];
}
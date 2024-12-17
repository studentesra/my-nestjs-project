import { AuditModel } from "./audit.model";
import { InventoryTypeModel } from "./inventory-type.model";
import { ProductModel } from './product.model';

export class inventoryModel {
    id: string;
    barcode: number;
    description: string;
    audit: AuditModel;
    type: InventoryTypeModel;
    product: ProductModel;
}
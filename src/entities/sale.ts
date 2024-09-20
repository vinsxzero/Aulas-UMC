import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
@Entity("sale")
class Sale{
    @PrimaryGeneratedColumn()
    readonly id!: string
    @Column()
    productId!: string
    @Column()
    clientID!: string
    @Column()
    userId!: string
    @Column()
    quantity!: string
    @Column()
    value!: string
}
export {Sale}
import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;

    @Column()
    middlename!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;
}
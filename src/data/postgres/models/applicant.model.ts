import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';



@Entity('community_members')
export class CommunityMember extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    phone!: string;

    @Column()
    city!: string;

    @Column()
    country!: string;

    @Column({ default: false })
    accepted_terms!: boolean;

    @Column({ type: 'text', nullable: true })
    message?: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
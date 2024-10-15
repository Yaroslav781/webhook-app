import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rows')
export class RowEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

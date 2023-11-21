import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from './role.entity'

@Entity()
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  oid_permission!: string

  @Column()
  description!: string

  @Column()
  url_item!: string

  @ManyToMany(() => Role, role => role.permissions)
  roles!: Role[]
}

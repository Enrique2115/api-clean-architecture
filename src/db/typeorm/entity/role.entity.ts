import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { User } from './user.entity'
import { Permission } from './permission.entity'

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  oid_role!: string

  @Column({
    unique: true,
    nullable: false,
  })
  name!: string

  @Column()
  status!: boolean

  @ManyToMany(() => User, user => user.roles)
  users!: User[]

  @ManyToMany(() => Permission, permission => permission.roles)
  @JoinTable({
    name: 'role_permission',
    joinColumn: {
      name: 'role_oid_role',
      referencedColumnName: 'oid_role',
    },
    inverseJoinColumn: {
      name: 'permission_oid_permission',
      referencedColumnName: 'oid_permission',
    },
  })
  permissions!: Permission[]
}

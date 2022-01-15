import { Injectable } from '@nestjs/common';
import { AccessControlUsers } from './access-control-users.model';
import { AccessControlRolesService } from '../access-control-roles/access-control-roles.service';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class AccessControlUsersService {
  constructor(private readonly accessControlRoles: AccessControlRolesService) {}

  async fetchRoleMembers(roleAddress: string): Promise<string[]> {
    const roleMembers: string[] = [];

    const totalMembers: bigint = await lab.admin.getRoleMemberCount(
      roleAddress,
    );

    for (let i = 0; i < totalMembers; i++) {
      const roleMember: string = await lab.admin.getRoleMember(
        roleAddress,
        i.toString(),
      );

      roleMembers.push(roleMember);
    }

    return roleMembers;
  }

  async fetchRoleAddress(role: string): Promise<string> {
    let roleAddress: string;

    switch (role) {
      case 'default-admin':
        roleAddress = (await this.accessControlRoles.fetchAccessControlRoles())
          .DEFAULT_ADMIN_ROLE;
        break;
      case 'lab-admin':
        roleAddress = (await this.accessControlRoles.fetchAccessControlRoles())
          .LAB_ADMIN;
        break;
      case 'lab-tech':
        roleAddress = (await this.accessControlRoles.fetchAccessControlRoles())
          .LAB_TECH;
        break;
    }

    return roleAddress;
  }

  async fetchAccessControlUsers(role: string): Promise<AccessControlUsers> {
    const roleAddress: string = await this.fetchRoleAddress(role);

    const accessControlUsers: AccessControlUsers = {
      roleMembers: await this.fetchRoleMembers(roleAddress),
      roleAdmin: await lab.admin.getRoleAdmin(roleAddress),
    };

    return accessControlUsers;
  }
}

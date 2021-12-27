import { Injectable } from '@nestjs/common';
import { AccessControlUsers } from './access-control-users.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class AccessControlUsersService {

  async parseData(totalMembers: number, roleAddress: string): Promise<AccessControlUsers[]> {
    const members: any = {}
    const accessControlUsers: AccessControlUsers[] = [];

    for (let i = 0; i < totalMembers; i++) {
      const roleMember: string = await lab.admin.getRoleMember(roleAddress, i.toString())

      members['roleMember'] = roleMember

      accessControlUsers.push(members)
    }

    return accessControlUsers
  }

  async fetchRoleAddress(role: string): Promise<string> {
    let roleAddress: string;

    switch (role) {
      case 'default-admin':
        roleAddress = await lab.admin.DEFAULT_ADMIN_ROLE()
        break;
      case 'lab-admin':
        roleAddress = await lab.admin.LAB_ADMIN()
        break;
      case 'lab-tech':
        roleAddress = await lab.admin.LAB_TECH()
        break;
    }

    return roleAddress
  }

  async fetchAccessControlUsers(role: string): Promise<AccessControlUsers[]> {
    const roleAddress: string = await this.fetchRoleAddress(role);
    const totalMembers: bigint = await lab.admin.getRoleMemberCount(roleAddress);

    const accessControlUsers: AccessControlUsers[] = await this.parseData(Number(totalMembers), roleAddress)

    return accessControlUsers;
  }
}

import { Injectable } from '@nestjs/common';
import { AccessControlRoles } from './access-control-roles.model';
import { contractLab as lab } from 'src/contract-lab/contract-lab.service';

@Injectable()
export class AccessControlRolesService {

  async fetchAccessControlRoles(): Promise<AccessControlRoles> {
    const contracts: AccessControlRoles = {
      DEFAULT_ADMIN_ROLE: await lab.admin.DEFAULT_ADMIN_ROLE(),
      LAB_ADMIN: await lab.admin.LAB_ADMIN(),
      LAB_TECH: await lab.admin.LAB_TECH(),
    };

    return contracts;
  }
}

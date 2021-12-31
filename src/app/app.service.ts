import { Injectable } from '@nestjs/common';

import { Resolver, Query } from '@nestjs/graphql';
@Resolver()
export class AppService {
  @Query((returns) => String)
  async getHello() {
    return 'Hello World!';
  }
}

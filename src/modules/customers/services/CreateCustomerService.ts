import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Customer from '../infra/typeorm/entities/Customer';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateCustomerService {
  constructor(private customersRepository: ICustomersRepository) {}

  public async execute({ name, email }: IRequest): Promise<Customer> {
    // TODO
    const customer = await this.customersRepository.findByEmail(email);

    if(!customer) {
      throw new AppError('Customer not found');
    }

    return customer;
  }
}

export default CreateCustomerService;

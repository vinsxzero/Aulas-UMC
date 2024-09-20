import { EntityRepository, Repository } from "typeorm";
import { Sale } from "../entities/sale";

@EntityRepository(Sale)
class SalesRepositories extends Repository<Sale> {}

export { SalesRepositories };
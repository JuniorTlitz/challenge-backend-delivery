import { Partner } from '../entities/partner';

export interface ICreatePartnerRepository {
	create(partner: Partner): Promise<void>;
}

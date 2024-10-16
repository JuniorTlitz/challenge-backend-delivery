import { expect, test } from 'vitest';
import { CreatePartnerUsecase } from './create-partner-usecase';
import { faker, fakerPT_BR } from '@faker-js/faker';
import { ICreatePartnerRepository } from '../repository/create-partner-repository';
import { Partner } from '../entities/partner';

const fakerCreatePartner: ICreatePartnerRepository = {
	create: async (partner: Partner): Promise<void> => {
		return;
	},
};

test('should create a partner', async () => {
	const createPartner = new CreatePartnerUsecase(fakerCreatePartner);

	const partner = createPartner.execute({
		tradingName: fakerPT_BR.company.name(),
		ownerName: faker.person.fullName(),
		document: '1432132123891/0001',
		converageArea: {
			type: 'MultiPolygon',
			coordinates: [
				[
					[
						[30, 20],
						[45, 40],
						[10, 40],
						[30, 20],
					],
				],
			],
		},
		address: {
			type: 'Point',
			coordinates: [-46.57421, -21.785741],
		},
	});

	expect(partner).toBeDefined();
});

import { IAdress, IConverageArea, Partner } from '../entities/partner';
import { IUseCase } from '../interface/usecase';
import { ICreatePartnerRepository } from '../repository/create-partner-repository';

interface ICreatePartnerRequest {
	tradingName: string;
	ownerName: string;
	document: string;
	converageArea: IConverageArea;
	address: IAdress;
}

export class CreatePartnerUsecase implements IUseCase {
	constructor(private createPartnerRepository: ICreatePartnerRepository) {}

	async execute({
		tradingName,
		ownerName,
		document,
		converageArea,
		address,
	}: ICreatePartnerRequest) {
		const partner = new Partner({
			tradingName,
			ownerName,
			document,
			converageArea,
			address,
		});

		await this.createPartnerRepository.create(partner);

		return partner;
	}
}

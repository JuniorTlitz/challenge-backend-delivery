import { randomUUID } from 'crypto';

export interface IConverageArea {
	type: string;
	coordinates: number[][][][];
}

export interface IAdress {
	type: string;
	coordinates: number[];
}

interface IPartnerProps {
	tradingName: string;
	ownerName: string;
	document: string;
	converageArea: IConverageArea;
	address: IAdress;
}

export class Partner {
	private _id: string;
	private tradingName: string;
	private ownerName: string;
	private document: string;
	private converageArea: IConverageArea;
	private address: IAdress;

	constructor(props: IPartnerProps, id?: string) {
		this._id = id ?? randomUUID();
		this.tradingName = props.tradingName;
		this.ownerName = props.ownerName;
		this.document = props.document;
		this.converageArea = props.converageArea;
		this.address = props.address;
	}
}

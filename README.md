# 24SevenHotels API

This is a demo project. Not complete and not intended for production.

## Set up dev environment

1.  `git clone git@github.com:nordbotten/24-api.git`
2.  `cd 24-api && cp .env.example .env`
3.  `npm install`
4.  `npx prisma migrate dev`
5.  `npm run dev`

Api is now running on localhost:3050

## Endpoints

**Healthcheck**
`GET /`
Response
`Plain-text: Healthy!`

**Get hotels**
`GET /hotels/`
Response

```TS
{
	status: "success"
	data: {
		id: string;
		name: string;
		description: string;
		address: string;
		postCode: string;
		city: string;
		latitude: number;
		longitude: number;
		image: string;
	}[];
} | { status: "error"; message: string; }
```

**Get single hotel**
`GET /hotels/{hotelId}`
Response

```TS
{
	status: "sucess",
	data: {
		id: string;
		name: string;
		description: string;
		address: string;
		postCode: string;
		city: string;
		latitude: number;
		longitude: number;
		image: string;
	};
} | { status: "error"; message: string; }
```

**Get RoomTypes Avaiability**
`GET /hotels/{hotelId}/room-types/availability?fromDate={YYYY-MM-DD}&toDate={YYYY-MM-DD`
Response

```TS
{
	status: "success",
	data: {
		id:  string;
		name: string;
		description:  string;
		price: string;
		image?: string;
		hotelId: string;
		_count: {
			rooms: number; // Number of available rooms
		}
	}[]
} | { status: "error"; message: string; }
```

**GET RoomType**
`GET /hotels/{hotelId}/room-types/{roomType}?fromDate={YYYY-MM-DD}&toDate={YYYY-MM-DD`
Response

```TS
{
	status: "success",
	data: {
		id:  string;
		name: string;
		description:  string;
		price: string;
		image?: string;
		hotelId: string;
		_count: {
			rooms: number; // Number of available rooms
		}
	}
} | { status: "error"; message: string; }
```

## Build

`npm run build`

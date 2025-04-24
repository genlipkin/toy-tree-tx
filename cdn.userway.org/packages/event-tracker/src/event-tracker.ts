export interface EventBody {
    event: string,
    timestamp: number,
    content: string;
    uId: number;
    page: string;
    device: string;
}

export class EventTracking {
    private intervalTimeout: number = 5000;
    private interval;
    private eventsStore: Array<EventBody> = [];
    private apiUrl = '';

    constructor({url}: {url: string}){
        this.apiUrl = url;
        this.initEventTracking();
    }

    public track(data) {
        this.eventsStore.push(data);
    }

    private initInterval() {
        this.interval = setInterval(() => {
            if (this.eventsStore.length) {
                EventTracking.sendStatRequest({events: this.eventsStore, baseUrl: this.apiUrl}).then(() => {
                    this.eventsStore = [];
                }).catch(error => {
                    console.error(error);
                });
            }
        }, this.intervalTimeout);
    }

    private static sendStatRequest({events, baseUrl}: {events: EventBody[], baseUrl: string}) {
        return fetch(`${baseUrl}abn/widget-adm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ events })
        });
    }

    private initEventTracking() {
        if(!this.interval) {
            this.initInterval()
        }
    }
}
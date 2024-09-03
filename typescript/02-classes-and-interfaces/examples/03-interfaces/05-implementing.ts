interface Report {
    name: string;
    body?: string;  // body is optional
    type: string;
    url: string;
    build: () => string;
    toJSON: () => string;
}

class DailyReport implements Report {
    readonly body: ReportBody | null;
    name: string;
    readonly type: string;
    readonly url: string;

    build(): string {
        return 'some daily report data';
    }

    toJSON(): string {
        return JSON.stringify({
            name: this.name,
            body: this.body,
            type: this.type,
            url: this.url,
            data: this.build(),
        });
    }
}

class WeaklyReport implements Report {
    readonly body: ReportBody | null;
    name: string;
    readonly type: string;
    readonly url: string;

    build(): string {
        return 'some weakly report data';
    }

    toJSON(): string {
        return JSON.stringify({
            name: this.name,
            body: this.body,
            type: this.type,
            url: this.url,
            data: this.build(),
        });
    }
}

const r1: Report = new DailyReport();
const r2: Report = new WeaklyReport();

console.log(r1.build());
console.log(r2.build());

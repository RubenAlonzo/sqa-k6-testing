import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://localhost:7292/string/reverse?input=AQS%C2%A0dlrow%C2%A0olleh');
    sleep(1);
}
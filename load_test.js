import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 50 },  // Ramp-up to 50 users
    { duration: '3h56m', target: 50 },  // Stay at 50 users for ~4 hours
    { duration: '2m', target: 0 },  // Ramp-down to 0 users
  ],
};

export default function () {
  http.post('http://<your-service-url>/generate', JSON.stringify({ prompt: 'Hello World' }), {
    headers: { 'Content-Type': 'application/json' },
  });
  sleep(1);
}

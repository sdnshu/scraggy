import { Worker } from 'bullmq';

import { redis } from '@/lib/redis';
import { sendEmail } from '@/utils/send-email';

const worker = new Worker(

    'emails',

    async (job) => {

        console.log('Processing job:');
        await sendEmail(job.data);
        console.log('Job completed:', job.id);

    },

    { connection: redis }

);

console.log('Worker is running and waiting for jobs...');
let body = JSON.parse($response.body);

if (body.code === 0 && body.data.current_device) {
    let device = body.data.current_device;
    device.trial_end_at = 1893427200; // 2030-01-01 00:00:00
    device.trial_status = 1;
}

$done({ body: JSON.stringify(body) });

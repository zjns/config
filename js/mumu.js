if ($response.status === 200) {
    let body = JSON.parse($response.body);

    if (body.code === 0 && body.data) {
        let data = body.data;
        data.member_expired_at = 1893427200; // 2030-01-01 00:00:00
        data.member_status = 1;
        if (data.current_device) {
            let device = data.current_device;
            device.trial_end_at = 1893427200; // 2030-01-01 00:00:00
            device.trial_status = 1;
        }
    }

    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}

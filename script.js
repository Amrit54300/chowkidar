const { exec } = require('child_process');

function commandnew() {
    exec('mkdir amrit', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}


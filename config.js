const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        database: 'first_test',
        user: 'hbz17nnhvyweduja605r',
        host: 'us-east.connect.psdb.cloud',
        password: 'pscale_pw_ajARFN4uv11AucrLyvvc8TMgnVoLICeaQnZ3FvNz9TF',
        ssl: {
            rejectUnauthorized: false
        }
    },
    listPerPage: 100,
};
module.exports = config;
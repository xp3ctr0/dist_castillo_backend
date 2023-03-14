const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        database: 'db_dist_castillo',
        user: 'gtfzm1f1oki04b3wuen4',
        host: 'us-east.connect.psdb.cloud',
        password: 'pscale_pw_43uHnzc0bognVOPIzYUOlVv7nv9B7EdRlrfKq1LARWt',
        ssl: {
            rejectUnauthorized: false
        }
    },
    listPerPage: 100,
};
module.exports = config;
app.get('/:table', function(req,res){
	connectionpool.getConnection(function(err, connection) {
		if (err) {
			console.error('CONNECTION error: ',err);
			res.statusCode = 503;
			res.send({
				result: 'error',
				err: err.code
			});
		} else {
			connection.query('SELECT * FROM '+req.params.table+' ORDER BY nodeId DESC LIMIT 20', req.params.id, function(err, rows, fields) {
				if (err) {
					console.error(err);
					res.statusCode = 500;
					res.send({
						result: 'error',
						err: err.code
					});
				}
				res.send({
					result: 'success',
					err: '',
					fields: fields,
					json: rows,
					length: rows.length
				});
				connection.release();
			});
		}
	});
});

app.get('/:table/:id', function(req,res){
	connectionpool.getConnection(function(err, connection) {
		if (err) {
			console.error('CONNECTION error: ',err);
			res.statusCode = 503;
			res.send({
				result: 'error',
				err: err.code
			});
		} else {
			connection.query('SELECT * FROM user WHERE nodeId = ?', req.params.id, function(err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                } else {
                    if (rows.length === 0){
                        res.statusCode = 204;
                    } else {
                        res.send({
                            result: 'success',
                            err:    '',
                            id:     req.params.id,
                            json:   rows[0],
                            length: 1
                        });
                    }
                    connection.release();
                }
            });
		}
	});
});

app.post('/:table', function(req,res){
	connectionpool.getConnection(function(err, connection) {
		if (err) {
			console.error('CONNECTION error: ',err);
			res.statusCode = 503;
			res.send({
				result: 'error',
				err: err.code
			});
		} else {
			connection.query('SELECT * FROM '+req.params.table+' ORDER BY id DESC LIMIT 20', req.params.id, function(err, rows, fields) {
				if (err) {
					console.error(err);
					res.statusCode = 500;
					res.send({
						result: 'error',
						err: err.code
					});
				}
				res.send({
					result: 'success',
					err: '',
					fields: fields,
					json: rows,
					length: rows.length
				});
				connection.release();
			});
		}
	});
});

app.get('/:table/:id', function(req,res){
	connectionpool.getConnection(function(err, connection) {
		if (err) {
			console.error('CONNECTION error: ',err);
			res.statusCode = 503;
			res.send({
				result: 'error',
				err: err.code
			});
		} else {
			connection.query('SELECT * FROM '+req.params.table+' ORDER BY id DESC LIMIT 20', req.params.id, function(err, rows, fields) {
				if (err) {
					console.error(err);
					res.statusCode = 500;
					res.send({
						result: 'error',
						err: err.code
					});
				}
				res.send({
					result: 'success',
					err: '',
					fields: fields,
					json: rows,
					length: rows.length
				});
				connection.release();
			});
		}
	});
});

app.get('/:table/:id', function(req,res){
	connectionpool.getConnection(function(err, connection) {
		if (err) {
			console.error('CONNECTION error: ',err);
			res.statusCode = 503;
			res.send({
				result: 'error',
				err: err.code
			});
		} else {
			connection.query('SELECT * FROM '+req.params.table+' ORDER BY id DESC LIMIT 20', req.params.id, function(err, rows, fields) {
				if (err) {
					console.error(err);
					res.statusCode = 500;
					res.send({
						result: 'error',
						err: err.code
					});
				}
				res.send({
					result: 'success',
					err: '',
					fields: fields,
					json: rows,
					length: rows.length
				});
				connection.release();
			});
		}
	});
});


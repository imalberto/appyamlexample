
start:
	# DEBUG=mojito,middleware node app
	# DEBUG=* node app
	DEBUG=mojito:server,middleware:* node app

start_mojito:
	./node_modules/mojito/bin/mojito start

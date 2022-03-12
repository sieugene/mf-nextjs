include .env
export

env = local

.env:
	@cp ./.env app1/.env
	@cp ./.env app2/.env
	@cp ./.env shell/.env


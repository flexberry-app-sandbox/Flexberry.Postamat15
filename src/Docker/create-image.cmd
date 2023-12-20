docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat15/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat15/app ../..

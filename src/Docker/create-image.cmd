docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probachetyre/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t probachetyre/app ../..

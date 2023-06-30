## Run MySql on docker

### Pulling MySql Image and Run

```bash
  // Go to "dockerfile" folder

  docker run -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=banco -d mysql:5.7
```

### Connecting to the MySql container

```bash
  docker exec -it some-mysql bash -l
```

### Entering to mysql console

```bash

  mysql -u root -p
```

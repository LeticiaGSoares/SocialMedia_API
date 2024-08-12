npm i mysql2, dotenv, jsonwebtoken, nodemon, uuid, cors, cookie-parser, bcrypt, express, multer

.env > conn.js > server.js > models > routes > controllers > helpers


### Primeira Forma Normal (1FN):
Eliminar atributos multivalorados e atributos compostos.

1. Remover o atributo multivalorado da tabela original.
2. Na tabela original, para cada atributo composto, criar uma coluna para cada informação a ser desmembrada.

### Segunda Forma Normal (2FN):
Se os registros na tabela, que não são chaves, dependam da chave primária em sua totalidade e não apenas parte dela.

1. Criar uma tabela para cada conjunto de atributos não chave que dependam de parte da chave primária da tabela e adicionar estes atributos não chaves na tabela.

### Terceira Forma Normal (3FN):

Se um registro tem um atributo não chave dependente de outro atributo não chave, precisaremos corrigir a tabela para a terceira forma normal.

1. Criar uma tabela para armazenar os atributos (ou conjunto de atributos) não-chave que não estão relacionados à chave primária da tabela original.
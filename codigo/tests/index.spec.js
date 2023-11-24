const API_URL = 'http://localhost:3000';

describe('Realizando testes no Jenkins', () => {
    
    test('Testando acesso ao usuário 1', async () => {
        const response = await fetch(API_URL+'/usuarios/1');
        //Chegou ao destino
        expect(response.status).toEqual(200);


        const data = await response.json();
        //Valor é de admin
        expect(data).toHaveProperty('email');
        expect(data).toHaveProperty('email', 'admin@admin.com');
    })
})
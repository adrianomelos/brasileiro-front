export class BaseUrls {

    public static get base(): string {
        return 'http://localhost:8080/';
    }

    public static get baseLogin(): string {
        return this.base + 'login';
    }

    public static get baseCliente(): string {
        return this.base + 'cliente';
    }

    public static get basePedido(): string {
        return this.base + 'aluguel';
    }

    public static get baseProduto(): string {
        return this.base + 'produto';
    }
}
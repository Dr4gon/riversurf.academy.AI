export class RouteUrl {

  public static readonly root: string = 'assets';
  public static readonly app: string = RouteUrl.root;

  public static getAllUrls(): string[] {
    return [
      RouteUrl.app
    ];
  }
}

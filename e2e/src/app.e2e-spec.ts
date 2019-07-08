import { AppPage } from "./app.po"
import { browser, logging } from "protractor"

describe("workspace-project App", (): void => {
  let page: AppPage

  beforeEach((): void => {
    page = new AppPage()
  })

  it("should display welcome message", (): void => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual("Welcome to MXroute-panel!")
  })

  afterEach(
    async (): Promise<void> => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser
        .manage()
        .logs()
        .get(logging.Type.BROWSER)
      expect(logs).not.toContain(
        jasmine.objectContaining({
          level: logging.Level.SEVERE
        } as logging.Entry)
      )
    }
  )
})
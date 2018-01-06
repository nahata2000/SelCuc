$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1790652930,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1038803327,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 379449283,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 254629989,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 64663030,
  "status": "passed"
});
formatter.after({
  "duration": 1546332,
  "status": "passed"
});
formatter.before({
  "duration": 909831304,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with correct username and password to fail",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-to-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the userform page wrongly",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 727682526,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 267439155,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 274826241,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPageWrongly()"
});
formatter.result({
  "duration": 37098886,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"sdfgdsfsd\"}\n  (Session info: chrome\u003d63.0.3239.108)\n  (Driver info: chromedriver\u003d2.34.522913 (36222509aa6e819815938cbf2709b4849735537c),platform\u003dLinux 4.4.0-81-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027DockerTest\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-81-generic\u0027, java.version: \u00279.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522913 (36222509aa6e819815938cbf2709b4849735537c), userDataDir\u003d/tmp/.org.chromium.Chromium.J8GU5d}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.108, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 45bf947200f7288a6b529da0e8c5a092\n*** Element info: {Using\u003did, value\u003dsdfgdsfsd}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\n\tat steps.LoginStep.iShouldSeeTheUserformPageWrongly(LoginStep.java:71)\n\tat ✽.Then I should see the userform page wrongly(Login.feature:18)\n",
  "status": "failed"
});
formatter.after({
  "duration": 454307,
  "status": "passed"
});
});
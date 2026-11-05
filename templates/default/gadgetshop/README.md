# Gadget Shop app

The app under test is not included in this scaffold. Download it into this
folder, from the project root:

```bash
# Android (debuggable course build)
curl -L -o gadgetshop/gadgetshop.apk https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.apk

# iOS Simulator build (if your trainer says it's available)
curl -L -o gadgetshop/gadgetshop.zip https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.zip
```

Then install it on your emulator or device:

```bash
npx mobilecli apps install gadgetshop/gadgetshop.apk
```

For the iOS Simulator, unzip `gadgetshop.zip` and install the `.app` with
`xcrun simctl install booted <path>/GadgetShopMobile.app`.

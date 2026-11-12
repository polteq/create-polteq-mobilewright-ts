# Gadget Shop app

The app under test is not included in this scaffold. Download it into this
folder, from the project root:

```bash
# Android (debuggable course build)
cd gadgetshop
curl -LO https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.apk
cd ..

# iOS Simulator build (if your trainer says it's available)
cd gadgetshop
curl -LO https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.zip
cd ..
```

Downloading with your browser works too: save `polteq-gadget-shop.apk` (or
`polteq-gadget-shop.zip`) in this folder, under the name the website gives it.

Then install it on your emulator or device:

```bash
npx mobilecli apps install gadgetshop/polteq-gadget-shop.apk
```

For the iOS Simulator, unzip `polteq-gadget-shop.zip` and install the `.app` with
`xcrun simctl install booted <path>/GadgetShopMobile.app`.

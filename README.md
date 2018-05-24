# Rust - Web Assembly

An example project to make a rust package and port it to webassembly,
then consume the package in a next.js app.

## Getting Started
 * [Next.js](https://github.com/zeit/next.js/)
 * [Rust Nightly](https://rust-lang-nursery.github.io/rust-wasm/setup.html)


## Rust
Currently, you'll need to install rust nightly to get the latest wasm-pack tool

Set the default as the nightly build.
```bash
rustup default nightly
```

Get the wasm toolchain
```bash
rustup target add wasm32-unknown-unknown --toolchain nightly
```

Install wasm-pack
```bash
cargo install wasm-pack
```

Compile to a wasm file for consumption in the nextjs app
```bash
wasm-pack init
```

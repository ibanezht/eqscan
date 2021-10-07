# [Choice] .NET Core version: 5.0, 3.1, 2.1
ARG VARIANT=5.0
FROM mcr.microsoft.com/vscode/devcontainers/dotnet:${VARIANT}

# [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
ARG NODE_VERSION="lts/*"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

RUN npm install -g yarn
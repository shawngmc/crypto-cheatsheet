





## Deployment
### Manual
1. Set Access Key and Secret
```
Set-Item -Path "env:AWS_ACCESS_KEY_ID" -Value "YOUR_ACCESS_KEY_ID"
Set-Item -Path "env:AWS_SECRET_ACCESS_KEY" -Value "YOUR_SECRET_ACCESS_KEY"
```
2. Deploy using process
```
npm run deploy
```
# PowerShell script to download club logos from Google Drive
# Run this from the client directory: .\download-club-logos.ps1

Write-Host "Starting download of club logos..." -ForegroundColor Green

# Create the clubs directory if it doesn't exist
$clubsDir = ".\public\clubs"
if (-not (Test-Path $clubsDir)) {
    New-Item -ItemType Directory -Path $clubsDir -Force | Out-Null
    Write-Host "Created directory: $clubsDir" -ForegroundColor Yellow
}

# Array of Google Drive file IDs and corresponding output names
$files = @(
    @{id="14dBDpBUBfDvOIiZp5o3RI_BSvfO780qI"; name="club-01.png"},
    @{id="1W45gLes4K9_RivL6nAUMAaybrNBh-9qn"; name="club-02.png"},
    @{id="1vxaYeSY4lTsLXtTrlV0tpsz22lXy_HI1"; name="club-03.png"},
    @{id="1JpZlRCVZ0TZZDKi7gxWNTEEyS4TdnsrX"; name="club-04.png"},
    @{id="1TR-eO0bFVyaTfafkpQ4Gk5c7qO9L-O1w"; name="club-05.png"},
    @{id="1L0y4NZxQWLKL7GwotrSwke6zMS7FP0r4"; name="club-06.png"},
    @{id="1aNtzQiudHjORgKOevp1HGiG9M7FpryqI"; name="club-07.png"},
    @{id="1lSe3xhju37Oan5N_dRWFm9QFk_BVmWJ1"; name="club-08.png"},
    @{id="141pMgf4KdAjbgUPwqMoP5dJGNKOjdpCb"; name="club-09.png"},
    @{id="1Yn6Y-0YCBtlTVRS6OH67Z8o0F4U21HeU"; name="club-10.png"},
    @{id="1zCXd598BsXya6xRtxlUD8S_4oMmiG8G0"; name="club-11.png"},
    @{id="1vjI-JetHnh2Xih0wSnOOiFYRZuUy6c7g"; name="club-12.png"},
    @{id="1MzjHYqK3PGFzexS05ptn9zTQFd1RZI7U"; name="club-13.png"},
    @{id="1L5D3DuuPeZfVgbEvIgRSNsLK000lgWrv"; name="club-14.png"},
    @{id="1PH37GUySeXWmBPt86sntHB5Ive1XAgkP"; name="club-15.png"},
    @{id="1t4Ww4y_nsjwb8QL_jwe1pE5shlLKkbPn"; name="club-16.png"},
    @{id="1ptszuknkRIT82a1r3l-8mtCZ4OkCyJxK"; name="club-17.png"},
    @{id="10E94i4F00gRiabCN_J6mboOkgsTSn6_Q"; name="club-18.png"},
    @{id="1m0qxgbRhSJ6tyViP7DyrXZ5QHii9IDAC"; name="club-19.png"},
    @{id="1XmceZdcLBgIyzUwQ7MOHOvhnyIEJF49s"; name="club-20.png"},
    @{id="1pCpEhw4MMdq0Fp-aoO5wbAxza8a3X629"; name="club-21.png"},
    @{id="11GvzYxkokMnFbg6_8tNFwcyl73Qyx_l7"; name="club-22.png"},
    @{id="1uhpJ73M4VV7zUyYhlaDz_fQqa9J7RcEd"; name="club-23.png"},
    @{id="1UbLJJdeWqmGI5Kl7zPmVd15btTYk-hwr"; name="club-24.png"},
    @{id="1sIOseN3cWr2DB6j8kTbb1IYRetKgO7lM"; name="club-25.png"},
    @{id="1oAB0tWYLlpjbKshGNLIBOvl1erzor6AO"; name="club-26.png"},
    @{id="1N8b0prRrz-qNysWnVyVHPVg9uoB_6wSI"; name="club-27.png"},
    @{id="1GXVOVdJK2D1dT1iUBz_fDKqgcFMrVhXu"; name="club-28.png"},
    @{id="1q5KltX2zh8--SNgJJxRVDFnW2lL7AFpF"; name="club-29.png"},
    @{id="1H07V6mR4SJKMn4_mlBI5-Af2XGDGruA5"; name="club-30.png"},
    @{id="1lVOvHVOjeMXoXN6Qd6u4yFsE2mLSGqT_"; name="club-31.png"},
    @{id="1jZ_-FzQiEitHSImA-xJ8_q_aa7nUCTiv"; name="club-32.png"},
    @{id="1Qr49chCFusHXUlE1VXnYmgYnEIVV-EVx"; name="club-33.png"},
    @{id="1r8QKQ6ya_RULI_LJZ-w4NZYJengV8yvY"; name="club-34.png"},
    @{id="1oIFI7wFOsCVT42V75SMlSPCvPBXYdGjx"; name="club-35.png"},
    @{id="11DLvfJpnODaC4mxyYNjQo_odW3jWJ8so"; name="club-36.png"},
    @{id="10up8WZA_cEnDFMch1gBAee49g4AVVpOU"; name="club-37.png"},
    @{id="17-2IMkkgegsHGsTORPJ_i2wZVqXZW7sk"; name="club-38.png"},
    @{id="1tpC66lSTTU_j-jivJF6i67KTvBbRH64S"; name="club-39.png"},
    @{id="1HvPnYxsgneJ97HJyaCOrGcxv_1RJAL4D"; name="club-40.png"},
    @{id="1gBgH06q7OSqBZQ0xNVYcwpByxMUFdeBZ"; name="club-41.png"},
    @{id="1JdctIdj9CEPLOJGipysdjCdKtQL8Az6s"; name="club-42.png"},
    @{id="16hAmL1NvRGbNvfCloUzxngGDTIhK1tJD"; name="club-43.png"},
    @{id="13u1PDEs1RPxTWjExu9LlEHt6kXZrcZVQ"; name="club-44.png"},
    @{id="1zo0lK3KTY0ebeaWld_rbLPTMs5Riq5WS"; name="club-45.png"},
    @{id="10diiSX-wpGpi1fiGLpKX_LDgFJUnNMEP"; name="club-46.png"}
)

$count = 0
$total = $files.Count

foreach ($file in $files) {
    $count++
    $url = "https://drive.google.com/uc?export=download&id=$($file.id)"
    $output = Join-Path $clubsDir $file.name
    
    Write-Host "[$count/$total] Downloading $($file.name)..." -ForegroundColor Cyan
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing
        Write-Host "  Success: $($file.name)" -ForegroundColor Green
    }
    catch {
        Write-Host "  Failed: $($file.name) - $($_.Exception.Message)" -ForegroundColor Red
    }
    
    # Small delay to avoid rate limiting
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "Download complete! All logos saved to $clubsDir" -ForegroundColor Green
Write-Host "Total files: $count" -ForegroundColor Yellow

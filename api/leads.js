  export default async function handler(req, res) {                                                                                                                                                         
    if (req.method !== 'POST') return res.status(405).end();                                                                                                                                                
                                                                                                                                                                                                            
    const { fbp, fbc, userAgent, eventId } = req.body || {};                                                                                                                                                
                                                                                                                                                                                                            
    await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {                                                                                                                             
      method: 'POST',                                                                                                                                                                                     
      headers: {                                                                                                                                                                                            
        'Content-Type': 'application/json',                                                                                                                                                               
        'Access-Token': process.env.TIKTOK_ACCESS_TOKEN
      },                                                                                                                                                                                                    
      body: JSON.stringify({
        pixel_code: 'D8TF8VRC77U2JEPM6MO0',                                                                                                                                                                 
        event: 'SubmitForm',                                                                                                                                                                                
        event_id: eventId,                                                                                                                                                                                  
        timestamp: new Date().toISOString(),                                                                                                                                                                
        context: {                                                                                                                                                                                          
          user_agent: userAgent,                                                                                                                                                                          
          ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress
        }                                                                                                                                                                                                   
      })
    });                                                                                                                                                                                                     
                                                                                                                                                                                                          
    res.status(200).json({ ok: true });                                                                                                                                                                     
  }
